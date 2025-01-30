import { Book } from "@/app/models/book";

export interface SelectBookProps {
  books: Book[];
  selectedBook: Book | null;
  handleSelectBook: (bookId: string) => void;
  loading: boolean;
}
