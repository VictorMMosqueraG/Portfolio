export type CertificateBadge = 'Certificado' | 'Completado' | 'En Curso' | 'Certified' | 'Completed' | 'In Progress';

export interface Course {
  id: number;
  badge: CertificateBadge;
  issuer: string;
  name: string;
  date: string;
  verifyUrl?: string;
}
