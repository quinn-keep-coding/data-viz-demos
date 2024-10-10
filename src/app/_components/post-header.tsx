import CoverImage from "./cover-image";
import {Author} from "@/src/interfaces/author";
import {Box, Stack, Typography} from "@mui/material";
import {AvatarIntros} from "@/src/app/_components/avatar-intros";

type Props = {
    title: string;
    coverImage: string;
    date: string;
    author: Author;
};

export function PostHeader({title, coverImage, date, author}: Props) {
    return (
        <Stack>
            <Typography variant="h3" gutterBottom>
                {title}
            </Typography>
            <AvatarIntros author={author} date={date}/>
            <Stack alignItems="center">
                <Box maxWidth="md">
                    <CoverImage title={title} src={coverImage}/>
                </Box>
            </Stack>
        </Stack>
    );
}
