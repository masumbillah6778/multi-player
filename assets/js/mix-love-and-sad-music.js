const music_list = [
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Ami To Amar Asi',
        artist : 'Khairul Wasi',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/ami_to_amar_asi.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'O Bondu Re',
        artist : 'Zubeen Garg',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/o_bondhu_re.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Sathi Valobasa Mon',
        artist : 'Miss Jojo',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/sathi_valobasa_mon.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Manus Boroi Sattho Por',
        artist : 'Baul Sukumar',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/manush_boroi_sharthopor.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Amar Aguner Chai',
        artist : 'Raj Barman',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/amar_aguner_chai.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Vitor Kande Shokhi',
        artist : 'F.A Sumon',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/vitor_kande_soki_amar.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Amar Jonom Gelo',
        artist : 'Rama Karmakar',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/amar_jonom_gelo_vule_vule.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Dore Dore Thekona',
        artist : 'Imran & Pujaa',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/tomi_dure_dure_r_thekona.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Olo Amar Poran Sokhi',
        artist : 'Sohag',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/olo_amar_poran_sokhi.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Eto Kosto Buker Vitor',
        artist : ' Promit, Sweety',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/eto_kosto_buker_vitor.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Mon Tor Hoyeche Ki',
        artist : 'Imran Mahamudul',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/mon_tor_hoyeche_ki.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Mom Bole Priya Priya',
        artist : '',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/mon_bole_priya_priya.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Kar Basore Gumaou',
        artist : 'Atif Ahmed Niloy',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/kar_basore_gumao.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Cokher Jole Vasiye Dilam',
        artist : 'Zubeen Garg',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/chokher_jole_vasiye_dilam.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Jiboner Aina',
        artist : 'Parveg',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/jiboner_ayna.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Tumi Amar Shudhu Amar',
        artist : 'Clean Bandit',
        music : 'https://github.com/masumbillah6778/sadsong/raw/main/tumi_amar_shudhu_amar.mp3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Soite Pari Nare Doyal Re',
        artist : 'Miraj Khan',
        music : 'https://drive.google.com/uc?export=download&id=1LF6Jp1x0DR2WDBfKcu4IDFuSlDoCoHd3'
    },
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Moron Jodi Ase o Priyotoma',
        artist : 'Larjina Parbin',
        music : 'https://drive.google.com/uc?export=download&id=1MJ9cwcQL2Jf93fOtrAoQDXAj73U_QIn2'
    },
  
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'O Kolija Kolija Re',
        artist : 'Larjina Parbin',
        music : 'https://drive.google.com/uc?export=download&id=1MU_D1eKwwcEH6ZeuCym55Q6QZzp_IxA9'
    },
  
    {
        img : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHzkdpVkvxZM000p6PDp0I7bNjWbVyKPqCyFx3qSdeNTb30TNiKWds4c9SojAl5L9rzSmiGz4-F9JIAP_63ImhnQrHDpvQs4_C4mLnhsRQGmNvDlko3BZarDw3jqHi2x1mHmGJ3vxJUQxJH5mhTQcGapdbCKBSpNqeDKwUYkb2wzMB7-yKx6ymc_WFhTY/s1600/masum.jpg',
        name : 'Tumi Amar Shudhu Amar',
        artist : 'Clean Bandit',
        music : 'https://drive.google.com/uc?export=download&id=1yyi8VF_N20NKwMB9TLZOP4n2-29MWxZI'
    }
];
