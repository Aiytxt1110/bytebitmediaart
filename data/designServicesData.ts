import { Palette, Scissors } from "lucide-react";
import { DesignService } from "../types/index";

export const designServices: DesignService[] = [
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "ออกแบบ Layer Webpage ที่เน้นประสบการณ์ผู้ใช้และความสวยงาม",
    price: "เริ่มต้น ฿15,000",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    features: ["Wireframe", "Mockup", "Prototype", "Design System"]
  },
  {
    icon: Scissors,
    title: "Graphics Design",
    description: "ตัดต่อภาพ/วิดีโอ รีทัช ทำโลโก้ และงานกราฟิกอื่นๆ",
    price: "เริ่มต้น ฿3,000",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
    features: ["Photo/Video Editing", "Retouch", "Logo Design", "Marketing Materials"]
  },
];