import { Stack } from "@mui/material";

import { categories } from "../utils/constants" ;   // Importing the categories from the constants.js file in the utils directory

const selectCategory = 'New'    // This is the default category that will be selected when the user first opens the application. You can change this to any category you want.

const Sidebar = () => (
    <Stack direction="row" sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
        {categories.map((category) => (
            <button className="category-btn" style={{ background: category.name === selectCategory && '#FC1503', color: 'white' }} key={category.name}>
                <span style={{ color: category.name === selectCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
                <span style={{ opacity: category.name === selectCategory ? 1 : 0.8 }}>{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar