import React, {useState} from "react";
import left from "../../../assets/images/left.svg"
import right from "../../../assets/images/right.svg"
import classes from "./Paginator.module.css";

let Paginator = ({totalItemsCount,pageSize,currentPage,onPageChange, portionSize = 10, ...props }) =>{

    let pageCount = Math.ceil(totalItemsCount/pageSize);

    let pages= [];
    for (let i = 1 ; i <= pageCount; i++ ){
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber =  portionNumber * portionSize;
    return <div className={classes.paginator}>
        { portionNumber > 1 &&
        <button className={classes.button} onClick={() => {setPortionNumber(portionNumber - 1)}}>
            <img className={classes.buttonImg} src={left}/>
        </button>
        }
        <div className={classes.pages}>
            {pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber )
            .map(page =>{
                return <span
                    className={currentPage == page ? classes.selectedPage : classes.page }
                    onClick={(event) => {onPageChange(page)}}>{page}</span>
            })}
        </div>
        { portionCount > portionNumber &&
        <button className={classes.button} onClick={() => {setPortionNumber(portionNumber + 1)}}>
            <img className={classes.buttonImg} src={right}/>
        </button>
        }
    </div>

}
export default Paginator;