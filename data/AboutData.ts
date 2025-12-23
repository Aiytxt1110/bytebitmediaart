import { AboutItem } from "../types/index";
import { Palette, Code2, Boxes, Cloud } from "lucide-react";

export const expertise: AboutItem[] = [
  {
    id: 1,
    icon: Palette,
    title: "UX/UI Design",
    description: "ออกแบบประสบการณ์ผู้ใช้ที่ใช้งานง่ายและสวยงาม",
  },
  {
    id: 2,
    icon: Code2,
    title: "Web & Platform Development",
    description: "พัฒนาเว็บไซต์และแพลตฟอร์มที่ทันสมัย",
  },
  {
    id: 3,
    icon: Boxes,
    title: "Business Systems",
    description: "ระบบจัดการธุรกิจที่ตอบโจทย์ทุกความต้องการ",
  },
  {
    id: 4,
    icon: Cloud,
    title: "SaaS Solutions",
    description: "ระบบ SaaS พร้อมใช้งานสำหรับธุรกิจต่างๆ",
  },
];