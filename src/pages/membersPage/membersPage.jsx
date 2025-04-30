import { useState } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import styles from "./membersPage.module.css";
import MembersCard1 from "./membersCard1/membersCard1";
import membersData from "../../data/membersData";

function MembersPage() {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");  // Состояние для поиска
    const [category, setCategory] = useState("all");  // Состояние для выбранной категории
    const [filteredMembers, setFilteredMembers] = useState(membersData);  // Фильтрованные участники

    const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentMembers = filteredMembers.slice(startIndex, startIndex + itemsPerPage);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        // Фильтрация участников по имени или профессии
        filterMembers(query, category);
    };

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
        filterMembers(searchQuery, selectedCategory);
    };

    const filterMembers = (query, selectedCategory) => {
        const filtered = membersData.filter((member) => {
            const matchesSearch = member.name.toLowerCase().includes(query.toLowerCase()) || 
                                  member.profession.toLowerCase().includes(query.toLowerCase());

            const matchesCategory = selectedCategory === "all" || member.tag === selectedCategory;

            return matchesSearch && matchesCategory;
        });

        setFilteredMembers(filtered);
        setCurrentPage(1);  // Сбрасываем страницу на первую при изменении фильтра
    };

    return (
        <>
            <Header />
            <div className={styles.first_block}>
                <div className={styles.first_block_inner}>
                    <div className={styles.title}>Участники сообщества</div>
                    <div className={styles.description}>Здесь собраны все участники, которые поддерживают инициативу открытых данных в Казахстане. Присоединяйтесь и становитесь частью этого движения!</div>
                    <div className={styles.description}>Изучите профили участников и их вклад в развитие открытых данных.</div>
                </div>
            </div>

            <div className={styles.second_block}>
                <div className={styles.second_block_inner}>
                    <input 
                        type="text" 
                        placeholder="Поиск участника..." 
                        className={styles.searchInput} 
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <div className={styles.filters}>
                        <button 
                            className={`${styles.filterButton} ${category === "all" ? styles.active : ""}`} 
                            onClick={() => handleCategoryChange("all")}
                        >
                            Все
                        </button>
                        <button 
                            className={`${styles.filterButton} ${category === "Frontend" ? styles.active : ""}`} 
                            onClick={() => handleCategoryChange("Frontend")}
                        >
                            Разработчики
                        </button>
                        <button 
                            className={`${styles.filterButton} ${category === "Data Analysis" ? styles.active : ""}`} 
                            onClick={() => handleCategoryChange("Data Analysis")}
                        >
                            Аналитики
                        </button>
                        <button 
                            className={`${styles.filterButton} ${category === "Research" ? styles.active : ""}`} 
                            onClick={() => handleCategoryChange("Research")}
                        >
                            Исследователи
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.third_block}>
                <div className={styles.third_block_inner}>
                    <div className={styles.cards}>
                        {currentMembers.map((member, index) => (
                            <MembersCard1
                                key={index}
                                imgSrc={member.imgSrc}
                                name={member.name}
                                profession={member.profession}
                                description={member.description}
                                tag={member.tag}
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

export default MembersPage;