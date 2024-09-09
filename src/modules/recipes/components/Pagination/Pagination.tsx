import React from 'react';

import './Pagination.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { changePage } from '../../../../store/reducers/recipes/recipesActionCreators';

export const Pagination: React.FC = () => {
   const { count, limit, page } = useAppSelector((state) => state.mealsReducer);

   const dispatch = useAppDispatch();
   const allPagesNumber = Math.ceil(count / limit);
   const countPages = (number: number) => {
      let pagesNumber: number[] = [];
      if (page >= 9) {
         pagesNumber = [page - 3, page - 2, page - 1, page];
         for (let i = 1; i < 3; i++) {
            if (page + i > allPagesNumber) {
               pagesNumber.unshift(page - 3 - i);
            } else {
               pagesNumber.push(page + i);
            }
         }
      } else {
         for (let i = 0; i < number; i++) {
            pagesNumber.push(i + 1);
         }
      }
      if (
         allPagesNumber > 9 &&
         allPagesNumber !== page &&
         pagesNumber[pagesNumber.length - 1] !== allPagesNumber
      ) {
         pagesNumber.push(allPagesNumber);
      }

      return pagesNumber;
   };

   const pages: number[] = [
      ...countPages(allPagesNumber >= 9 ? 7 : allPagesNumber),
   ];
   const handleClick = (number: number) => {
      dispatch(changePage(number));
   };
   const handleClickRightArrow = () => {
      dispatch(changePage(page + 1));
   };
   const handleClickLeftArrow = () => {
      dispatch(changePage(page - 1));
   };
   return (
      <div className='pagination__container'>
         {page > 1 && (
            <button className='pagination__btn' onClick={handleClickLeftArrow}>
               {'<'}
            </button>
         )}
         {pages.map((number) => (
            <React.Fragment key={number}>
               {number === allPagesNumber && allPagesNumber > 9 && (
                  <button className='pagination__disable-btn'>...</button>
               )}
               <button
                  className='pagination__btn'
                  style={{ borderColor: number === page ? 'black' : 'gray' }}
                  onClick={() => handleClick(number)}
               >
                  {number}
               </button>
            </React.Fragment>
         ))}
         {page !== allPagesNumber && !!allPagesNumber && (
            <button className='pagination__btn' onClick={handleClickRightArrow}>
               {'>'}
            </button>
         )}
      </div>
   );
};
