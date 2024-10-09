import {getAllPosts} from "@/src/lib/api";
import {MoreStories} from "@/src/app/_components/more-stories";
import {Container} from "@mui/material";

export default function Index() {
    const allPosts = getAllPosts();
    return (
        <main>
            <Container sx={{p:8}} disableGutters={true} maxWidth={false}>
                <MoreStories posts={allPosts}/>
            </Container>
        </main>
    );
}
