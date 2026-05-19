import React, { useState, useEffect, useRef } from "react";
import {
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Eye,
  Image as ImageIcon,
  Upload,
  AlertCircle,
  Package,
  TrendingDown,
  DollarSign,
  ArrowRight,
  MoreVertical,
  Download,
  Box,
  X,
  Loader2,
  ChevronRight,
  Zap,
  Truck,
} from "lucide-react";
import Pagination from "../../components/Pagination";
import {
  partsService,
  vendorService,
  buildPartFormData,
  resolvePartImageUrl,
} from "../../services/api";

const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

const InventoryStat = ({ title, value, icon: Icon }) => (
  <div className="bg-white rounded-[30px] p-8 shadow-xl border border-black/5 transition-all hover:-translate-y-1 duration-500 group overflow-hidden relative">
    <div className="absolute -right-4 -bottom-4 text-black/5 group-hover:text-[#fcd20b]/10 transition-colors">
      <Icon size={100} />
    </div>
    <div className="flex items-center gap-6 relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-[#111111] text-[#fcd20b] flex items-center justify-center group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500 shadow-lg">
        <Icon size={28} />
      </div>
      <div>
        <p className="m-0 text-[10px] font-bold text-[#7a7a7a] uppercase tracking-[0.2em] font-oswald italic mb-1">
          {title}
        </p>
        <h4 className="m-0 text-3xl font-bold text-[#111111] font-oswald italic uppercase tracking-tighter leading-none">
          {value}
        </h4>
      </div>
    </div>
  </div>
);

const PartsManagement = () => {
  const fileInputRef = useRef(null);
  const [parts, setParts] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPartId, setEditingPartId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [existingImageUrl, setExistingImageUrl] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [formData, setFormData] = useState({
    PartName: "",
    Category: "Engine Components",
    SellingPrice: 0,
    CostPrice: 0,
    StockQuantity: 0,
    ReorderLevel: 10,
    VendorID: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [partsRes, vendorsRes] = await Promise.all([
        partsService.getAll(),
        vendorService.getAll(),
      ]);
      setParts(partsRes.data);
      setVendors(vendorsRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? parseFloat(value) : value,
    });
  };

  const clearImageState = () => {
    if (imagePreview?.startsWith("blob:")) {
      URL.revokeObjectURL(imagePreview);
    }
    setImageFile(null);
    setImagePreview(null);
    setExistingImageUrl(null);
    setRemoveImage(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      alert("Only PNG and JPG images are allowed.");
      e.target.value = "";
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      alert("Image file size cannot exceed 10MB.");
      e.target.value = "";
      return;
    }

    if (imagePreview?.startsWith("blob:")) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setRemoveImage(false);
  };

  const handleRemoveImage = () => {
    if (imagePreview?.startsWith("blob:")) {
      URL.revokeObjectURL(imagePreview);
    }
    setImageFile(null);
    setImagePreview(null);
    setRemoveImage(true);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getApiErrorMessage = (error, fallback) => {
    const data = error.response?.data;
    if (data?.message) return data.message;
    if (data?.errors) {
      return Object.values(data.errors).flat().join("\n");
    }
    return fallback;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.VendorID) {
      return alert("Please select a strategic vendor partner.");
    }

    setSubmitting(true);
    try {
      const fields = {
        ...formData,
        VendorID: parseInt(formData.VendorID, 10),
      };

      if (editingPartId) {
        if (imageFile) {
          const form = buildPartFormData(fields, imageFile);
          await partsService.updateWithImage(editingPartId, form);
        } else {
          const submissionData = {
            ...fields,
            partID: editingPartId,
            PartID: editingPartId,
          };
          if (removeImage) {
            await partsService.deleteImage(editingPartId);
          }
          await partsService.update(editingPartId, submissionData);
        }
      } else if (imageFile) {
        const form = buildPartFormData(fields, imageFile);
        await partsService.createWithImage(form);
      } else {
        await partsService.create({
          ...fields,
          partID: 0,
          PartID: 0,
          imageUrl: null,
        });
      }

      resetForm();
      fetchData();
    } catch (error) {
      alert(
        "Validation Error:\n" +
          getApiErrorMessage(
            error,
            "Critical system failure during asset registration.",
          ),
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setEditingPartId(null);
    setShowAddForm(false);
    clearImageState();
    setFormData({
      PartName: "",
      Category: "Engine Components",
      SellingPrice: 0,
      CostPrice: 0,
      StockQuantity: 0,
      ReorderLevel: 10,
      VendorID: "",
    });
  };

  const handleEdit = (part) => {
    clearImageState();
    setEditingPartId(part.partID);
    setFormData({
      PartName: part.partName || "",
      Category: part.category || "Engine Components",
      SellingPrice: part.sellingPrice || 0,
      CostPrice: part.costPrice || 0,
      StockQuantity: part.stockQuantity || 0,
      ReorderLevel: part.reorderLevel || 10,
      VendorID: String(part.vendorID || ""),
    });
    if (part.imageUrl) {
      setExistingImageUrl(resolvePartImageUrl(part.imageUrl));
    }
    setShowAddForm(true);
  };

  const displayPreview = imagePreview || (removeImage ? null : existingImageUrl);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this part?")) {
      try {
        await partsService.delete(id);
        fetchData();
      } catch (error) {
        alert("Error deleting part");
      }
    }
  };

  const filteredParts = parts.filter(
    (p) =>
      (p.partName || p.PartName)
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (p.category || p.Category)
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()),
  );

  const lowStockCount = parts.filter(
    (p) => p.stockQuantity <= (p.reorderLevel || p.ReorderLevel || 10),
  ).length;
  const totalValue = parts.reduce(
    (acc, curr) =>
      acc + (curr.sellingPrice || curr.SellingPrice) * curr.stockQuantity,
    0,
  );

  return (
    <div className="pb-20 font-roboto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 animate-xtra">
        <div>
          <h2 className="text-5xl font-bold text-[#111111] m-0 tracking-tighter font-oswald italic uppercase leading-none mb-2">
            INVENTORY <span className="text-[#fcd20b]">MANAGEMENT</span>
          </h2>
          <p className="text-[#7a7a7a] text-sm font-medium uppercase tracking-widest italic">
            Monitor stock levels, reorder values, and part pricing
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 rounded-full border-2 border-black/5 bg-white text-[#111111] text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#fcd20b] hover:border-[#fcd20b] transition-all shadow-sm font-oswald">
            <Download size={16} /> EXPORT CATALOG
          </button>
          <button
            className={`px-10 py-4 rounded-full font-oswald font-bold uppercase tracking-widest text-[10px] flex items-center gap-3 transition-all shadow-2xl transform active:scale-95 ${showAddForm ? "bg-[#111111] text-white hover:bg-black" : "bg-[#fcd20b] text-[#111111] hover:bg-[#111111] hover:text-[#fcd20b]"}`}
            onClick={() => (showAddForm ? resetForm() : setShowAddForm(true))}
          >
            {showAddForm ? <X size={20} /> : <Plus size={20} />}
            {showAddForm ? "CLOSE FORM" : "ADD NEW PART"}
          </button>
        </div>
      </div>

      {/* Quick Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-xtra">
        <InventoryStat title="TOTAL SKUS" value={parts.length} icon={Box} />
        <InventoryStat
          title="LOW STOCK"
          value={lowStockCount}
          icon={AlertCircle}
        />
        <InventoryStat
          title="CATALOG VALUE"
          value={`$${totalValue.toLocaleString()}`}
          icon={DollarSign}
        />
        <InventoryStat title="TURNOVER RATE" value="78%" icon={Package} />
      </div>

      {showAddForm && (
        <div className="bg-white rounded-[40px] shadow-2xl border border-black/5 mb-16 overflow-hidden animate-xtra">
          <div className="bg-[#111111] p-10 flex justify-between items-center text-white">
            <h3 className="font-bold m-0 font-oswald italic uppercase tracking-tighter text-2xl flex items-center gap-4">
              <Zap size={24} className="text-[#fcd20b]" />
              {editingPartId ? "UPDATE" : "INITIALIZE"}{" "}
              <span className="text-[#fcd20b]">PRODUCT</span>
            </h3>
            <button
              onClick={resetForm}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500 transition-all"
            >
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".png,.jpg,.jpeg,image/png,image/jpeg"
                  className="hidden"
                  onChange={handleImageSelect}
                />
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      fileInputRef.current?.click();
                    }
                  }}
                  className="h-full min-h-[280px] border-4 border-dashed border-black/5 rounded-[30px] flex flex-col items-center justify-center bg-[#f8f8f8] hover:bg-white hover:border-[#fcd20b] transition-all cursor-pointer group p-6 overflow-hidden relative"
                >
                  {displayPreview ? (
                    <>
                      <img
                        src={displayPreview}
                        alt="Part preview"
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 z-10">
                        <Upload size={28} className="text-white" />
                        <p className="text-[10px] font-bold text-white uppercase tracking-widest font-oswald">
                          Change photo
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 rounded-[24px] bg-white shadow-md flex items-center justify-center text-[#111111]/30 group-hover:bg-[#fcd20b] group-hover:text-[#111111] transition-all duration-500">
                        <Upload size={36} />
                      </div>
                      <p className="text-[11px] font-bold text-[#7a7a7a] mt-6 tracking-[0.2em] uppercase text-center font-oswald">
                        UPLOAD ASSET PHOTO
                      </p>
                      <p className="text-[9px] text-[#7a7a7a]/40 mt-1 font-bold uppercase">
                        PNG, JPG · MAX 10MB
                      </p>
                    </>
                  )}
                </div>
                {(displayPreview || (existingImageUrl && !removeImage)) && (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleRemoveImage();
                    }}
                    className="mt-4 w-full py-3 rounded-2xl border-2 border-rose-200 text-rose-600 text-[10px] font-bold uppercase tracking-widest font-oswald hover:bg-rose-50 transition-all"
                  >
                    Remove photo
                  </button>
                )}
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                    Part Nomenclature
                  </label>
                  <input
                    type="text"
                    name="PartName"
                    value={formData.PartName}
                    onChange={handleChange}
                    required
                    placeholder="V8 FUEL INJECTOR"
                    className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                    Strategic Vendor Partner
                  </label>
                  <select
                    name="VendorID"
                    value={formData.VendorID}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] appearance-none cursor-pointer"
                  >
                    <option value="">SELECT VENDOR NODE</option>
                    {vendors.map((v) => (
                      <option key={v.vendorID} value={v.vendorID}>
                        {v.vendorName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                    Unit Cost Price ($)
                  </label>
                  <input
                    type="number"
                    name="CostPrice"
                    value={formData.CostPrice}
                    onChange={handleChange}
                    required
                    placeholder="0.00"
                    className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                    Unit Selling Price ($)
                  </label>
                  <input
                    type="number"
                    name="SellingPrice"
                    value={formData.SellingPrice}
                    onChange={handleChange}
                    required
                    placeholder="0.00"
                    className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] placeholder:text-[#7a7a7a]/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                    Inventory Category
                  </label>
                  <select
                    name="Category"
                    value={formData.Category}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111] appearance-none cursor-pointer"
                  >
                    <option>Engine Components</option>
                    <option>Braking Systems</option>
                    <option>Electrical</option>
                    <option>Body & Trim</option>
                    <option>Suspension</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                      Current Stock
                    </label>
                    <input
                      type="number"
                      name="StockQuantity"
                      value={formData.StockQuantity}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.2em] ml-1 font-oswald italic">
                      Reorder Level
                    </label>
                    <input
                      type="number"
                      name="ReorderLevel"
                      value={formData.ReorderLevel}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-[#f8f8f8] border-2 border-transparent outline-none focus:bg-white focus:border-[#fcd20b] transition-all font-bold text-[#111111]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-5 mt-12 border-t border-black/5 pt-10">
              <button
                type="button"
                onClick={resetForm}
                className="px-10 py-4 rounded-full bg-[#f8f8f8] text-[#7a7a7a] font-bold text-[10px] uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all font-oswald"
              >
                DISCARD CHANGES
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-12 py-4 rounded-full bg-[#fcd20b] text-[#111111] font-bold text-[10px] uppercase tracking-widest shadow-xl shadow-[#fcd20b]/20 hover:bg-[#111111] hover:text-[#fcd20b] transition-all active:scale-95 font-oswald italic disabled:opacity-50 flex items-center gap-2"
              >
                {submitting && <Loader2 size={16} className="animate-spin" />}
                {editingPartId ? "UPDATE CATALOG ITEM" : "PUBLISH TO CATALOG"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main Catalog Card */}
      <div
        className="bg-white rounded-[40px] shadow-2xl border border-black/5 overflow-hidden animate-xtra"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="bg-[#111111] p-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-white">
          <h4 className="font-bold m-0 font-oswald italic uppercase tracking-tighter text-xl">
            LIVE PRODUCT <span className="text-[#fcd20b]">CATALOG</span>
          </h4>
          <div className="bg-white/5 rounded-full px-8 py-3 flex items-center gap-4 border border-white/10 w-full sm:w-80 focus-within:bg-white focus-within:border-[#fcd20b] transition-all group">
            <Search
              size={18}
              className="text-white/40 group-focus-within:text-[#111111]"
            />
            <input
              type="text"
              placeholder="SCAN CATALOG DATABASE..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none text-white text-[10px] font-bold outline-none w-full placeholder:text-white/20 group-focus-within:text-[#111111]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#f8f8f8]">
                <th className="pl-10 py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Part Name
                </th>
                <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Category
                </th>
                <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Stock Status
                </th>
                <th className="py-6 text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Unit Price
                </th>
                <th className="pr-10 py-6 text-right text-[10px] uppercase text-[#7a7a7a] font-bold border-b border-black/5 tracking-[0.2em] font-oswald italic">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <Loader2
                      size={40}
                      className="animate-spin mx-auto mb-4 text-[#fcd20b]"
                    />
                    <p className="font-bold font-oswald uppercase tracking-widest text-[#7a7a7a] text-[10px]">
                      Loading Parts Inventory...
                    </p>
                  </td>
                </tr>
              ) : filteredParts.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <p className="font-bold font-oswald uppercase tracking-widest text-[#7a7a7a] text-[10px]">
                      NO PARTS DETECTED IN INVENTORY
                    </p>
                  </td>
                </tr>
              ) : (
                filteredParts.map((item) => (
                  <tr
                    key={item.partID}
                    className="group hover:bg-[#f8f8f8] transition-all duration-300"
                  >
                    <td className="pl-10 py-8 border-b border-black/5">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-[20px] bg-[#f8f8f8] border border-black/5 flex items-center justify-center text-[#111111]/30 shadow-sm group-hover:scale-110 overflow-hidden transition-all duration-500">
                          {item.imageUrl ? (
                            <img
                              src={resolvePartImageUrl(item.imageUrl)}
                              alt={item.partName || "Part"}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <ImageIcon size={24} />
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-lg text-[#111111] m-0 leading-none mb-2 font-oswald italic uppercase tracking-tighter">
                            {item.partName || item.PartName}
                          </p>
                          <p className="text-[10px] text-[#7a7a7a] font-bold uppercase tracking-widest">
                            SKU: {item.partID.toString().padStart(6, "0")}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <span className="text-[9px] font-bold text-[#111111] bg-[#fcd20b] px-4 py-1.5 rounded-full tracking-widest uppercase font-oswald">
                        {item.category || item.Category}
                      </span>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full shadow-sm ${item.stockQuantity <= (item.reorderLevel || item.ReorderLevel || 10) ? "bg-rose-500 animate-pulse" : "bg-emerald-500"}`}
                          ></div>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-widest font-oswald ${item.stockQuantity <= (item.reorderLevel || item.ReorderLevel || 10) ? "text-rose-600" : "text-emerald-600"}`}
                          >
                            {item.stockQuantity <=
                            (item.reorderLevel || item.ReorderLevel || 10)
                              ? "CRITICAL LEVEL"
                              : "STOCK OPTIMAL"}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#7a7a7a] m-0 font-bold tracking-tighter uppercase font-oswald italic">
                          {item.stockQuantity} UNITS AVAILABLE
                        </p>
                      </div>
                    </td>
                    <td className="py-8 border-b border-black/5">
                      <p className="text-xl font-bold m-0 text-[#111111] tracking-tighter font-oswald italic">
                        $
                        {(item.sellingPrice || item.SellingPrice || 0).toFixed(
                          2,
                        )}
                      </p>
                    </td>
                    <td className="pr-10 py-8 border-b border-black/5 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                        <button
                          onClick={() => handleEdit(item)}
                          className="w-10 h-10 rounded-xl bg-white text-[#111111] hover:bg-[#111111] hover:text-[#fcd20b] border border-black/5 transition-all shadow-sm flex items-center justify-center"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.partID)}
                          className="w-10 h-10 rounded-xl bg-white text-rose-500 hover:bg-rose-500 hover:text-white border border-black/5 transition-all shadow-sm flex items-center justify-center"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-[#f8f8f8]/50 flex justify-center">
          <Pagination
            totalItems={parts.length}
            itemsPerPage={10}
            currentPage={1}
          />
        </div>
      </div>
    </div>
  );
};

export default PartsManagement;
