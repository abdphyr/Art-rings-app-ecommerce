
export interface IHeader{
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    search:string,
    favouritesNumber:number;
    cartNumber:number;
}