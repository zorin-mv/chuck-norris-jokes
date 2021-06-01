export default interface ICategoriesProps {
    categories: string[];
    clickHandler(category: string): void;
}