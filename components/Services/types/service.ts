import { LucideIcon } from 'lucide-react';

export interface ServiceCategory {
    title: string;
    description: string;
}

export interface DesignService {
    title: string;
    price: string;
    description: string;
    features: string[];
    image: string;
    icon: LucideIcon;
}

export interface DevService {
    title: string;
    description: string;
    price: string;
    image: string;
    icon: LucideIcon;
    badge?: string;
}

export interface SaaSService {
    title: string;
    description: string;
    features: string[];
    pricing: {
        free: string;
        starter: string;
        pro: string;
    };
    image: string;
    color: string;
}
