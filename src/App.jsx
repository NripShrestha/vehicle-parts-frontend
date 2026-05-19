import React, { useCallback, useEffect, useState } from "react";
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
import MaintenanceBookings from "./pages/staff/MaintenanceBookings";

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

const SCREEN_ROUTES = {
  Financial: { path: "/admin/financial", roles: ["admin"] },
  Staff: { path: "/admin/staff", roles: ["admin"] },
  Parts: { path: "/admin/parts", roles: ["admin"] },
  Purchases: { path: "/admin/purchases", roles: ["admin"] },
  Vendors: { path: "/admin/vendors", roles: ["admin"] },
  StaffDash: { path: "/staff/dashboard", roles: ["staff"] },
  Registration: { path: "/staff/customers/new", roles: ["staff"] },
  SalesInvoice: { path: "/staff/sales-invoice", roles: ["staff"] },
  CustomerSearch: { path: "/staff/customers", roles: ["staff"] },
  CustomerDetails: { path: "/staff/customers/details", roles: ["staff"] },
  CustomerReports: { path: "/staff/reports", roles: ["staff"] },
  EmailInvoice: { path: "/staff/email-invoice", roles: ["staff"] },
  MaintenanceBookings: { path: "/staff/maintenance-bookings", roles: ["staff", "admin"] },
  CustomerDash: { path: "/customer/dashboard", roles: ["customer"] },
  History: { path: "/customer/history", roles: ["customer"] },
  Appointments: { path: "/customer/appointments", roles: ["customer"] },
  Marketplace: { path: "/customer/marketplace", roles: ["customer"] },
  AssetDetails: { path: "/customer/asset-details", roles: ["customer"] },
  Profile: { path: "/profile" },
  Settings: { path: "/settings" },
  Notifications: { path: "/notifications" },
  MenuOverview: { path: "/menu" },
};

const getDefaultScreen = (role) => {
  const normalizedRole = role?.toLowerCase();
  if (normalizedRole === "admin") return "Financial";
  if (normalizedRole === "staff") return "StaffDash";
  if (normalizedRole === "customer") return "CustomerDash";
  return "Financial";
};

const getScreenFromPath = (pathname) => {
  return Object.entries(SCREEN_ROUTES).find(
    ([, route]) => route.path === pathname,
  )?.[0];
};

const isScreenAllowed = (screen, role) => {
  const route = SCREEN_ROUTES[screen];
  const normalizedRole = role?.toLowerCase();
  return Boolean(route && (!route.roles || route.roles.includes(normalizedRole)));
};

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeScreen, setActiveScreen] = useState("Financial");
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      const routeScreen = getScreenFromPath(window.location.pathname);
      const nextScreen =
        routeScreen && isScreenAllowed(routeScreen, parsedUser.role)
          ? routeScreen
          : getDefaultScreen(parsedUser.role);

      setUser(parsedUser);
      setActiveScreen(nextScreen);

      if (!routeScreen || !isScreenAllowed(routeScreen, parsedUser.role)) {
        window.history.replaceState(null, "", SCREEN_ROUTES[nextScreen].path);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!user) return undefined;

    const handlePopState = () => {
      const routeScreen = getScreenFromPath(window.location.pathname);
      const nextScreen =
        routeScreen && isScreenAllowed(routeScreen, user.role)
          ? routeScreen
          : getDefaultScreen(user.role);
      setActiveScreen(nextScreen);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [user]);

  const navigateToScreen = useCallback(
    (screen, options = {}) => {
      if (!user) return;

      const nextScreen = isScreenAllowed(screen, user.role)
        ? screen
        : getDefaultScreen(user.role);
      const path = SCREEN_ROUTES[nextScreen]?.path || "/";

      setActiveScreen(nextScreen);

      if (window.location.pathname !== path) {
        const historyMethod = options.replace ? "replaceState" : "pushState";
        window.history[historyMethod](null, "", path);
      }
    },
    [user],
  );

  const handleLogin = (userData) => {
    const nextScreen = getDefaultScreen(userData.role);
    setUser(userData);
    setActiveScreen(nextScreen);
    window.history.replaceState(null, "", SCREEN_ROUTES[nextScreen].path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setSelectedAsset(null);
    setSelectedCustomerId(null);
    setCart([]);
    window.history.replaceState(null, "", "/login");
  };

  const addToCart = (part, quantity = 1) => {
    setCart((previous) => {
      const existing = previous.find((item) => item.partID === part.partID);
      if (existing) {
        return previous.map((item) =>
          item.partID === part.partID
            ? {
                ...item,
                quantity: Math.min(
                  item.quantity + quantity,
                  part.stockQuantity ?? item.stockQuantity,
                ),
              }
            : item,
        );
      }
      return [
        ...previous,
        {
          ...part,
          quantity: Math.min(quantity, part.stockQuantity ?? quantity),
        },
      ];
    });
  };

  const updateCartQty = (partID, quantity) => {
    setCart((previous) =>
      previous
        .map((item) => {
          if (item.partID !== partID) return item;
          const maxQty = item.stockQuantity ?? quantity;
          const nextQty = Math.min(Math.max(1, quantity), maxQty);
          return { ...item, quantity: nextQty };
        })
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (partID) => {
    setCart((previous) => previous.filter((item) => item.partID !== partID));
  };

  const clearCart = () => setCart([]);

  const handlePurchaseComplete = () => {
    navigateToScreen("History");
  };

  const handleExploreAsset = (asset) => {
    setSelectedAsset(asset);
    navigateToScreen("AssetDetails");
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
        return <StaffDashboard setActiveScreen={navigateToScreen} />;
      case "Registration":
        return <CustomerRegistration />;
      case "SalesInvoice":
        return <SalesInvoice />;
      case "CustomerSearch":
        return (
          <CustomerSearch
            setActiveScreen={navigateToScreen}
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
      case "MaintenanceBookings":
        return <MaintenanceBookings />;

      // Customer
      case "CustomerDash":
        return <CustomerDashboard user={user} setActiveScreen={navigateToScreen} />;
      case "History":
        return <PurchaseHistory user={user} />;
      case "Appointments":
        return <AppointmentRequests user={user} />;
      case "Marketplace":
        return (
          <BuySell
            onExploreAsset={handleExploreAsset}
            cart={cart}
            onAddToCart={addToCart}
            onUpdateCartQty={updateCartQty}
            onRemoveFromCart={removeFromCart}
            onClearCart={clearCart}
            onPurchaseComplete={handlePurchaseComplete}
          />
        );
      case "AssetDetails":
        return selectedAsset ? (
          <AssetDetails
            asset={selectedAsset}
            onBack={() => navigateToScreen("Marketplace")}
            onAddToCart={addToCart}
            onPurchaseComplete={handlePurchaseComplete}
          />
        ) : (
          <BuySell
            onExploreAsset={handleExploreAsset}
            cart={cart}
            onAddToCart={addToCart}
            onUpdateCartQty={updateCartQty}
            onRemoveFromCart={removeFromCart}
            onClearCart={clearCart}
            onPurchaseComplete={handlePurchaseComplete}
          />
        );

      // Common
      case "Profile":
        return <Profile user={user} />;
      case "Settings":
        return <Settings />;
      case "Notifications":
        return <Notifications user={user} />;
      case "MenuOverview":
        return <MenuOverview setActiveScreen={navigateToScreen} />;

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
        setActiveScreen={navigateToScreen}
        userRole={user.role}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 lg:pl-[300px]">
        <Navbar
          activeScreen={activeScreen}
          setActiveScreen={navigateToScreen}
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
