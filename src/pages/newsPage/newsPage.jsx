import React, { useState } from "react";
import styles from "./newsPage.module.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import NewsCard1 from "./newsCard1/newsCard1";
import newsData from "../../data/newsData";

function NewsPage() {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); // state for search term
    const [selectedCategory, setSelectedCategory] = useState(""); // state for selected category
    const newsPerPage = 6;

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;

    // Filter news based on search term and selected category
    const filteredNews = newsData.filter((news) => {
        const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            news.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? news.tag === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
    const totalPages = Math.ceil(filteredNews.length / newsPerPage);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to the first page when search term changes
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to the first page when category changes
    };

    return (
        <>
            <Header />
            <div className={styles.first_block}>
                <div className={styles.first_block_inner}>
                    <div className={styles.title}>Новости</div>
                    <div className={styles.description}>Актуальные новости и события Открытого правительства</div>
                </div>
            </div>

            <div className={styles.second_block}>
                <div className={styles.second_block_inner}>
                    <input
                        type="text"
                        placeholder="Поиск новостей"
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />

                    <div className={styles.filters}>
                        <button
                            className={styles.filterButton}
                            onClick={() => handleCategoryChange("Технологии")}
                        >
                            Технологии
                        </button>
                        <button
                            className={styles.filterButton}
                            onClick={() => handleCategoryChange("Закон")}
                        >
                            Закон
                        </button>
                        <button
                            className={styles.filterButton}
                            onClick={() => handleCategoryChange("Образование")}
                        >
                            Образование
                        </button>
                        <button
                            className={styles.filterButton}
                            onClick={() => handleCategoryChange("Блокчейн")}
                        >
                            Блокчейн
                        </button>
                        <button
                            className={styles.filterButton}
                            onClick={() => handleCategoryChange("Общество")}
                        >
                            Общество
                        </button>
                        <button
                            className={styles.filterButton}
                            onClick={() => handleCategoryChange("Бизнес")}
                        >
                            Бизнес
                        </button>
                        <button
                            className={styles.filterButton}
                            onClick={() => handleCategoryChange("")} // Reset filter
                        >
                            Все категории
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.third_block}>
                <div className={styles.third_block_inner}>
                    <div className={styles.cards}>
                        {currentNews.map((news, index) => (
                            <NewsCard1 key={index} {...news} />
                        ))}
                    </div>

                    <div className={styles.pagination}>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                className={styles.pageButton}
                                onClick={() => handlePageClick(index + 1)}
                                style={{
                                    backgroundColor: currentPage === index + 1 ? "#1A56DB" : "#EFF6FF",
                                    color: currentPage === index + 1 ? "white" : "#1A56DB",
                                    fontWeight: "bold",
                                }}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NewsPage;