"use client";
import {Post} from "@/src/interfaces/post";
import {Card, CardActions, CardContent, CardMedia, Container, Grid2, Typography} from "@mui/material";
import DateFormatter from "@/src/app/_components/date-formatter";
import Avatar from "@/src/app/_components/avatar";
import {useEffect, useState} from "react";

type Props = {
    posts: Post[];
};

export function MoreStories({posts}: Props) {
    const [jsonData, setJsonData] = useState({name: ""});

    useEffect(() => {
        fetch('/jsons/test.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setJsonData(data))
            .catch(error => console.error('Error fetching JSON:', error));
    }, []);

    return (
        <Container disableGutters={true} maxWidth={false}>
            <Typography variant="h2" gutterBottom>
                More Stories
            </Typography>
            <Typography variant="body1" gutterBottom>
                {jsonData.name}
            </Typography>
            <Grid2 container spacing={4}>
                {posts.map((post, index) => (
                    <Grid2 key={index} size={4} display="flex">
                        <Card raised={true} sx={{alignSelf: "stretch", display: "flex", flexDirection: "column"}}>
                            <CardMedia
                                sx={{height: 300}}
                                image={post.coverImage}
                                title={post.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {post.title}
                                </Typography>
                                <DateFormatter dateString={post.date}/>
                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                    {post.excerpt}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Avatar name={post.author.name} picture={post.author.picture}/>
                            </CardActions>
                        </Card>
                    </Grid2>

                ))}
            </Grid2>
        </Container>
    );
}
