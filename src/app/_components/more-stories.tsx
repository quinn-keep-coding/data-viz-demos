"use client";
import {Post} from "@/src/interfaces/post";
import {Box, Card, CardActions, CardContent, CardMedia, Container, Grid2, Typography} from "@mui/material";
import DateFormatter from "@/src/app/_components/date-formatter";
import Link from "next/link";
import {useEffect} from "react";
import {AvatarIntros} from "@/src/app/_components/avatar-intros";
import BarChart from "@/src/app/_components/bar-chart";

type Props = {
    posts: Post[];
};

export function MoreStories({posts}: Props) {
    useEffect(() => {
        fetch('/jsons/test.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => console.log("fetch from public folder:", data))
            .catch(error => console.error('Error fetching JSON:', error));
    }, []);

    return (
        <Container disableGutters={true} maxWidth={false}>
            <Typography variant="h2" gutterBottom>
                More Stories
            </Typography>
            <Box mb={5}>
                <BarChart data={[
                    { label: 'A', value: 10 },
                    { label: 'B', value: 20 },
                    { label: 'C', value: 15 },
                    { label: 'D', value: 30 },
                    { label: 'E', value: 25 },
                ]}/>
            </Box>
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
                                <Link href={`/posts/${post.slug}`} className="hover:underline">
                                    <Typography gutterBottom variant="h5" component="div">
                                        {post.title}
                                    </Typography>
                                </Link>
                                <DateFormatter dateString={post.date}/>
                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                    {post.excerpt}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <AvatarIntros author={post.author} />
                            </CardActions>
                        </Card>
                    </Grid2>

                ))}
            </Grid2>
        </Container>
    );
}
