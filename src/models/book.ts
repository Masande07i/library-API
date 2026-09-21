export interface Book {
    id: number;
    title: string;
    year: string;
    authorId: number;
}
export let books: Book[] = [];