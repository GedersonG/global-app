import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export const SideBarItem = ({ title = '', body = '' }) => {

    // const dispatch = useDispatch();

    const onClickNote = () => {
        console.log("Click en ", title)
        // dispatch( setActiveNote({ title, body, id, date, imageUrls }) )
    }


    // const newTitle = useMemo( () => {
    //     return title.length > 17
    //         ? title.substring(0,17) + '...'
    //         : title;
    // },[ title ])

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ onClickNote }>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
            {/* newtitle */}
                <ListItemText primary={ title } /> 
                <ListItemText secondary={ body } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
