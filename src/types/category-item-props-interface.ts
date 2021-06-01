export default interface ICategoryItemProps {
    categoryName: string;
    clickHandler(category: string): void;
}