// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Button, Container, Typography, Box, Paper } from "@mui/material";

// const Home = () => {
//     const navigate = useNavigate();

//     return (
//         <Box
//             sx={{
//                 minHeight: "100vh",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 backgroundColor: "#ffffff", // רקע לבן נקי
//             }}
//         >
//             <Paper
//                 elevation={3}
//                 sx={{
//                     padding: 5,
//                     borderRadius: "12px",
//                     backgroundColor: "#ffffff", // מסגרת לבנה אלגנטית
//                     width: "400px",
//                     textAlign: "center",
//                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // צל עדין למראה מקצועי
//                 }}
//             >
//                 <Typography variant="h4" fontWeight="600" color="text.primary" gutterBottom>
//                     ברוכים הבאים
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 3 }}>
//                     התחברו או הירשמו כדי להמשיך לאזור האישי
//                 </Typography>

//                 {/* כפתור כניסה */}
//                 <Button
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                     onClick={() => navigate("/login")}
//                     sx={{
//                         padding: "12px",
//                         fontSize: "1rem",
//                         borderRadius: "8px",
//                         boxShadow: "none",
//                         textTransform: "none",
//                         "&:hover": { backgroundColor: "#1565c0" },
//                     }}
//                 >
//                     כניסה
//                 </Button>

//                 {/* כפתור הרשמה עם מסגרת תכלת */}
//                 <Button
//                     fullWidth
//                     variant="outlined"
//                     sx={{
//                         marginTop: 2,
//                         padding: "12px",
//                         fontSize: "1rem",
//                         borderRadius: "8px",
//                         textTransform: "none",
//                         color: "#1976d2", // צבע תכלת
//                         borderColor: "#1976d2", // מסגרת תכלת
//                         "&:hover": { backgroundColor: "#1976d2", color: "white" }, // רקע תכלת בלחיצה
//                     }}
//                     onClick={() => navigate("/logup")}
//                 >
//                     הרשמה
//                 </Button>
//             </Paper>
//         </Box>
//     );
// };

// export default Home;




import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box, Paper } from "@mui/material";
import backgroundImage from '../img/רקע1.jpg'; // ודא שהנתיב לתמונה נכון

const Home = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                position: "fixed", // קיבוע ה-Box למסך
                top: 0,
                left: 0,
                height: "100vh", // כיסוי מלא של הגובה
                width: "100vw", // כיסוי מלא של הרוחב
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${backgroundImage})`, // הגדרת התמונה כרקע
                backgroundSize: "cover", // כיסוי מלא של המסך
                backgroundPosition: "center", // מיקום מרכזי של התמונה
                backgroundRepeat: "no-repeat", // ללא חזרה של התמונה
                overflow: "hidden", // מניעת גלילה
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 5,
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)", // מסגרת לבנה אלגנטית עם שקיפות
                    width: "400px",
                    textAlign: "center",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // צל עדין למראה מקצועי
                }}
            >
                <Typography variant="h4" fontWeight="600" color="text.primary" gutterBottom>
                    ברוכים הבאים
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 3 }}>
                    התחברו או הירשמו כדי להמשיך לאזור האישי
                </Typography>

                {/* כפתור כניסה */}
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/login")}
                    sx={{
                        padding: "12px",
                        fontSize: "1rem",
                        borderRadius: "8px",
                        boxShadow: "none",
                        textTransform: "none",
                        backgroundColor: "#000000", // צבע שחור
                        "&:hover": { backgroundColor: "#333333" }, // צבע שחור כהה יותר בלחיצה
                    }}
                >
                    כניסה
                </Button>

                {/* כפתור הרשמה עם מסגרת שחורה */}
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                        marginTop: 2,
                        padding: "12px",
                        fontSize: "1rem",
                        borderRadius: "8px",
                        textTransform: "none",
                        color: "#000000", // צבע שחור
                        borderColor: "#000000", // מסגרת שחורה
                        "&:hover": { backgroundColor: "#000000", color: "white" }, // רקע שחור בלחיצה
                    }}
                    onClick={() => navigate("/logup")}
                >
                    הרשמה
                </Button>
            </Paper>
        </Box>
    );
};

export default Home;