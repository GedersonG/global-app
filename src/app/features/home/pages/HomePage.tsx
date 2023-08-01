import { IconButton } from "@mui/material"
import { GlobalLayout } from "../layout/GlobalLayout"
import { AddOutlined } from "@mui/icons-material"

export const HomePage = () => {

    const onClickNewNote = () => {
        console.log("NEW")
    }

    return (
        <GlobalLayout>
          
          {/* {
            (!!active)
              ? <NoteView />
              : <NothingSelectedView />
          } */}
    
    
          <IconButton
            onClick={ onClickNewNote }
            size='large'
            sx={{
              color: 'white',
              backgroundColor: 'error.main',
              ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
              position: 'fixed',
              right: 50,
              bottom: 50
            }}
          >
            <AddOutlined sx={{ fontSize: 30 }} />
          </IconButton>
    
        </GlobalLayout>
      )
}
