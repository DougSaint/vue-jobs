import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function formatDate(dateTime) {
  if (dateTime) {
    const date = new Date(dateTime);
    return format(date, "dd/MM/yyyy", { locale: ptBR });
  }
  return "";
}
