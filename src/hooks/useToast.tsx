import { useTheme } from "next-themes";
import toast from "react-hot-toast";

export default function useToast() {
  const { theme } = useTheme();

  const toastSuccess = (message: string) =>
    toast.success(message, {
      style: {
        fontWeight: 500,
        backgroundColor: theme === "light" ? "#84cc16" : "#65a30d",
        color: theme === "light" ? "#f7fee7" : "#1a2e05",
      },
      iconTheme: {
        primary: theme === "light" ? "#f7fee7" : "#1a2e05",
        secondary: "#84cc16",
      },
      position: "top-right",
      duration: 2000,
    });

  return { toastSuccess };
}
