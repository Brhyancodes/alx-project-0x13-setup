// Interface for the route prop in Home component (pages/index.tsx)
export interface PageRouteProps {
    pageRoute: string;
  }
  
  // Interface for Button component (components/common/Button.tsx)
  export interface ButtonProps {
    buttonLabel: string;
    buttonSize?: string;
    buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
    action?: () => void;
  }
  
  // Interface for Layout component (components/layouts/Layout.tsx)
  export interface LayoutProps {
    children: React.ReactNode;
  }
  