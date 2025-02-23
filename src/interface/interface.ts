export interface AccountItem {
  type: string;
  content: string;
  name: string;
}

export interface ActiveDataItem {
  title: string;
  data: AccountItem[];
}

export interface ModalProps {
  isOpen: boolean;        
  onClose: () => void;  
  images: string[];       
  initialIndex?: number;  
}
