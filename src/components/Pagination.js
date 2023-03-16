import styles from './Pagination.module.css';

export const Pagination = ({ total, limit, page, setPage }) => {
    const numPages = Math.ceil(total / limit);

    return (
        <div className={styles.container}>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                &lt;
            </button>
            {Array(numPages)
                .fill()
                .map((_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                        className={page === i + 1 ? styles.current : undefined}
                    >
                        {i + 1}
                    </button>
                ))
            }
            <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
                &gt;
            </button>
        </div>
    )
}