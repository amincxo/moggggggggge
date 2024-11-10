import React, { useState } from 'react';
import styles from "./MenuContent.module.css"
import { Link } from 'react-router-dom';

function MenuContent() {
  const [categories, setCategories] = useState([
    {
      name: 'رهبران',
      isOpen: false,
      subcategories: [
        { name: ' آیت‌الله سیدعلی خامنه‌ای ' , link: '/khamenei'},
        { name: 'شهید سید حسن نصرالله' , link: '/nasroalah'  },
      ],
    },
    {
        name: 'عملیات ها ',
        isOpen: false,
        subcategories: [
          { name: ' وعده صادق 1 ' , link: '/vade-sadege1' },
          { name: ' وعده صادق 2' , link: '/vade-sadege2' },
          { name: ' تحلیل و بررسی   ' , link: '/tahlilvabaresi' },
        ],
      },
      {
        name: ' اقتصاد محور مقاومت ',
        isOpen: false,
        subcategories: [
          { name: 'تحلیل کوتاه مدت' , link: '/tahlilkotah' },
          { name: 'تحلیل میان مدت ' , link: '/tahlilmediom' },
          { name: 'تحلیل بلند مدت' , link: '/tahlillong' } ,
        ],
      },
    // ... سایر دسته بندی ها
  ]);

  const toggleDropdown = (index) => {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) =>
        i === index ? { ...category, isOpen: !category.isOpen } : category
      )
    );
  };

  return (
    <div className={styles.container}>
        <div className="dropdown">
        <ul>
            {categories.map((category, index) => (
                <li key={category.name}>
                <h5 onClick={() => toggleDropdown(index)}>
                {category.name}
                </h5>
                {category.isOpen && (
                    <ul className={styles.subMenu}>
                    {category.subcategories.map((subcategory) => (
                        <li key={subcategory.name}> <Link to={subcategory.link} > {subcategory.name} </Link> </li>
                    ))}
                </ul>
                )}
            </li>
            ))}
        </ul>
        </div>
    </div>
  );
}

export default MenuContent