import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";

// Admin Pages
import FinancialDashboard from "./pages/admin/FinancialDashboard";
import StaffManagement from "./pages/admin/StaffManagement";
import PartsManagement from "./pages/admin/PartsManagement";
import PurchaseInvoice from "./pages/admin/PurchaseInvoice";
import VendorManagement from "./pages/admin/VendorManagement";

// Staff Pages
import CustomerRegistration from "./pages/staff/CustomerRegistration";
import SalesInvoice from "./pages/staff/SalesInvoice";
import CustomerSearch from "./pages/staff/CustomerSearch";
import CustomerDetails from "./pages/staff/CustomerDetails";
import CustomerReports from "./pages/staff/CustomerReports";
import EmailInvoice from "./pages/staff/EmailInvoice";
import StaffDashboard from "./pages/staff/StaffDashboard";

// Customer Pages
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import PurchaseHistory from "./pages/customer/PurchaseHistory";
import AppointmentRequests from "./pages/customer/AppointmentRequests";
import BuySell from "./pages/customer/BuySell";
import AssetDetails from "./pages/customer/AssetDetails";

// Common Pages
import Profile from "./pages/common/Profile";
import Settings from "./pages/common/Settings";
import Notifications from "./pages/common/Notifications";
import MenuOverview from "./pages/common/MenuOverview";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeScreen, setActiveScreen] = useState("Financial");
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      // Set default screen based on role
      setDefaultScreen(parsedUser.role);
    }
    setLoading(false);
  }, []);

  const setDefaultScreen = (role) => {
    const normalizedRole = role?.toLowerCase();
    if (normalizedRole === "admin") setActiveScreen("Financial");
    else if (normalizedRole === "staff") setActiveScreen("StaffDash");
    else if (normalizedRole === "customer") setActiveScreen("CustomerDash");
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setDefaultScreen(userData.role);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleExploreAsset = (asset) => {
    setSelectedAsset(asset);
    setActiveScreen("AssetDetails");
  };

  const renderScreen = () => {
    switch (activeScreen) {
      // Admin
      case "Financial":
        return <FinancialDashboard />;
      case "Staff":
        return <StaffManagement />;
      case "Parts":
        return <PartsManagement />;
      case "Purchases":
        return <PurchaseInvoice />;
      case "Vendors":
        return <VendorManagement />;

      // Staff
      case "StaffDash":
        return <StaffDashboard setActiveScreen={setActiveScreen} />;
      case "Registration":
        return <CustomerRegistration />;
      case "SalesInvoice":
        return <SalesInvoice />;
      case "CustomerSearch":
        return (
          <CustomerSearch
            setActiveScreen={setActiveScreen}
            setSelectedCustomerId={setSelectedCustomerId}
          />
        );
      case "CustomerDetails":
        return (
          <CustomerDetails
            customerId={selectedCustomerId}
            onBack={() => setActiveScreen("CustomerSearch")}
          />
        );
      case "CustomerReports":
        return <CustomerReports />;
      case "EmailInvoice":
        return <EmailInvoice />;

      // Customer
      case "CustomerDash":
        return <CustomerDashboard user={user} setActiveScreen={setActiveScreen} />;
      case "History":
        return <PurchaseHistory user={user} />;
      case "Appointments":
        return <AppointmentRequests user={user} />;
      case "Marketplace":
        return <BuySell onExploreAsset={handleExploreAsset} />;
      case "AssetDetails":
        return (
          <AssetDetails
            asset={selectedAsset}
            onBack={() => setActiveScreen("Marketplace")}
          />
        );

      // Common
      case "Profile":
        return <Profile user={user} />;
      case "Settings":
        return <Settings />;
      case "Notifications":
        return <Notifications />;
      case "MenuOverview":
        return <MenuOverview setActiveScreen={setActiveScreen} />;

      default:
        return (
          <div className="p-10 text-center">
            Screen "{activeScreen}" coming soon.
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-[#f8f8f8] overflow-x-hidden font-roboto">
      <Sidebar
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        userRole={user.role}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 lg:pl-[300px]">
        <Navbar
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          user={user}
        />

        <main className="flex-1 p-6 lg:p-12 pt-4">
          <div className="max-w-7xl mx-auto animate-xtra">{renderScreen()}</div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
