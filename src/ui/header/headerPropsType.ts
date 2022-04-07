
export interface Header{
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    search:string,
    favouritesNumber:number;
    cartNumber:number;
}