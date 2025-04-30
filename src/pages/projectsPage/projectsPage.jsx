import { useState } from "react";
import styles from "./projectsPage.module.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import ProjectsCard1 from "./projectsCard1/projectsCard1";
import projectsData from "../../data/projectsData";

function ProjectsPage() {

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); // state for search
    const [selectedCategory, setSelectedCategory] = useState(""); // state for category filter

    const totalPages = Math.ceil(projectsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;

    // Filter projects based on search term and selected category
    const filteredProjects = projectsData.filter((project) => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? project.tag === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

    // Update search term
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to the first page when the search term changes
    };

    // Update selected category
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to the first page when the category changes
    };

    return (
        <>
            <Header />
            <div className={styles.first_block}>
                <div className={styles.first_block_inner}>
                    <div className={styles.title}>Проекты</div>
                    <div className={styles.description}>Открытые данные — мощный инструмент для изменений. Здесь представлены проекты, которые используют государственные данные для создания новых сервисов, повышения прозрачности и улучшения жизни граждан.</div>
                    <div className={styles.description}>Изучите проекты, присоединяйтесь к инициативам или предлагайте свои идеи!</div>
                </div>
            </div>

            <div className={styles.second_block}>
                <div className={styles.second_block_inner}>
                    <input
                        type="text"
                        placeholder="Поиск проектов"
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />

                    <div className={styles.filters}>
                        <button
                            className={styles.filterButton}
                            onClick={() => handleCategoryChange("Финансы")}
                        >
                            Финансы
                        </button>
                        <button
                            className={styles.filterButton}
                            onClick={() => handleCategoryChange("Экология")}
                        >
                            Экология
                        </button>
                        <button
                            className={styles.filterButton}
                            onClick={() => handleCategoryChange("Транспорт")}
                        >
                            Транспорт
                        </button>
                        {/* Add more categories here */}
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
                        {currentProjects.map((project, index) => (
                            <ProjectsCard1
                                key={index}
                                imgSrc={project.imgSrc}
                                title={project.title}
                                description={project.description}
                                date={project.date}
                                tag={project.tag}
                            />
                        ))}
                    </div>
                    <div className={styles.pagination}>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                className={`${styles.pageButton} ${currentPage === i + 1 ? styles.active : ''}`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProjectsPage;
