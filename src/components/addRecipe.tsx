import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "./userContext";
import { Box, Button, TextField, Typography, Container, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const AddRecipe = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [img, setImg] = useState("");
    const [ingredients, setIngredients] = useState([{ name: "", count: "", type: "" }]);
    const [instructions, setInstructions] = useState([""]);
    const [msg, setMsg] = useState("");
    const { user } = useContext(UserContext);

    const handleIngredientChange = (index, event) => {
        const values = [...ingredients];
        values[index][event.target.name] = event.target.value;
        setIngredients(values);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: "", count: "", type: "" }]);
    };

    const handleRemoveIngredient = (index) => {
        const values = [...ingredients];
        values.splice(index, 1);
        setIngredients(values);
    };

    const handleInstructionChange = (index, event) => {
        const values = [...instructions];
        values[index] = event.target.value;
        setInstructions(values);
    };

    const handleAddInstruction = () => {
        setInstructions([...instructions, ""]);
    };

    const handleRemoveInstruction = (index) => {
        const values = [...instructions];
        values.splice(index, 1);
        setInstructions(values);
    };

    const addRecipe = async () => {
        try {
            const res = await axios.post("http://localhost:8080/api/recipe", {
                Name: name,
                Description: description,
                Duration: duration,
                Difficulty: difficulty,
                CategoryId: categoryId,
                Img: img,
                Ingridents: ingredients,
                Instructions: instructions,
                UserId: user.Id,
            });
            setMsg("Recipe added successfully");
        } catch (error: any) {
            if (error.response && error.response.data) {
                console.error("Server error:", error.response.data);
                if (error.response.data.includes("Name must be unique")) {
                    setMsg("שם המתכון כבר קיים, אנא בחר שם אחר.");
                } else {
                    setMsg(error.response.data); // כאן מציגים את הודעת השגיאה שמגיעה מהשרת
                }
            } else {
                console.error("Error:", error);
                setMsg('Failed to add recipe, please try again.');
            }
        }
    };

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    mt: 4,
                }}
            >
                <Typography variant="h4" gutterBottom>
                    הוספת מתכון חדש
                </Typography>
                <TextField
                    label="שם מתכון"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="תיאור"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="משך זמן (בדקות)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="רמת קושי"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="מזהה קטגוריה"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="קישור לתמונה"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    fullWidth
                />
                <Typography variant="h6">רכיבים</Typography>
                {ingredients.map((ingredient, index) => (
                    <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <TextField
                            label="שם מוצר"
                            name="name"
                            value={ingredient.name}
                            onChange={(e) => handleIngredientChange(index, e)}
                            fullWidth
                        />
                        <TextField
                            label="כמות"
                            name="count"
                            value={ingredient.count}
                            onChange={(e) => handleIngredientChange(index, e)}
                            fullWidth
                        />
                        <TextField
                            label="סוג כמות"
                            name="type"
                            value={ingredient.type}
                            onChange={(e) => handleIngredientChange(index, e)}
                            fullWidth
                        />
                        <IconButton onClick={() => handleRemoveIngredient(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                ))}
                <Button variant="contained" onClick={handleAddIngredient}>
                    הוסף רכיב
                </Button>
                <Typography variant="h6">הוראות</Typography>
                {instructions.map((instruction, index) => (
                    <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <TextField
                            label={`הוראה ${index + 1}`}
                            value={instruction}
                            onChange={(e) => handleInstructionChange(index, e)}
                            fullWidth
                        />
                        <IconButton onClick={() => handleRemoveInstruction(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                ))}
                <Button variant="contained" onClick={handleAddInstruction}>
                    הוסף הוראה
                </Button>
                <Button variant="contained" color="primary" onClick={addRecipe}>
                    הוספת מתכון
                </Button>
                {msg && (
                    <Typography variant="body1" color="error">
                        {msg}
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default AddRecipe;