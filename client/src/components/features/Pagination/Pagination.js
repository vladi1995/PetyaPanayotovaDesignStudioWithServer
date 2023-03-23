import styles from './Pagination.module.css';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className={styles['container']}>
            {pages.map((page, index) => {
                return <button
                    className={page === currentPage ? styles['active'] : styles['notActive']}
                    key={index}
                    onClick={() => setCurrentPage(page)}>
                    {page}
                </button>;
            })}
        </div>
    );
};

export default Pagination;