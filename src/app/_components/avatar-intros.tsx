import {Author} from "@/src/interfaces/author";
import {Avatar, Stack, Typography} from "@mui/material";
import DateFormatter from "@/src/app/_components/date-formatter";

export type Props = {
    author: Author,
    date?: string,
};

export const AvatarIntros = ({author, date}: Props) => {
    return (
        <Stack flexDirection="row" alignItems="center" gap={2} mb={4}>
            <Avatar alt={author.name} src={author.picture} sx={{width: 48, height: 48}}/>
            <Typography variant="body1" fontSize="21px" fontWeight="600">
                {author.name}
            </Typography>
            {date && <DateFormatter dateString={date}/>}
        </Stack>
    )
};
