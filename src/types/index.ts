// Tipos de usuário
export enum UserType {
  RECEIVER = 'receiver',
  SUPPLIER = 'supplier',
  DONOR = 'donor'
}

// Produto com código NCM
export interface Product {
  id: string;
  name: string;
  ncmCode: string;
  description: string;
  requiredQuantity?: number; // Para recebedores
  donatedQuantity?: number; // Para acompanhar doações
  price?: number; // Valor unitário
  image?: string; // URL da imagem
}

// Tipo Recebedor (quem recebe doações)
export interface Receiver {
  id: string;
  name: string;
  description: string;
  address: string;
  contact: string;
  products: Product[]; // Lista de produtos que precisa
}

// Tipo Fornecedor
export interface Supplier {
  id: string;
  name: string;
  description: string;
  address: string;
  contact: string;
  products: Product[]; // Lista de produtos que pode fornecer
}

// Tipo Doador
export interface Donor {
  id: string;
  name: string;
  email: string;
  donations: Donation[];
}

// Registro de doação
export interface Donation {
  id: string;
  productId: string;
  productName: string;
  receiverId: string;
  receiverName: string;
  donorId: string;
  amount: number;
  date: Date;
} 