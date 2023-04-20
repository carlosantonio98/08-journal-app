import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
    return (
        <JournalLayout>

            {/* <Typography>Ad et dolor proident occaecat esse anim est consequat velit aliqua aliquip reprehenderit. Id excepteur et elit fugiat proident exercitation non enim reprehenderit deserunt tempor tempor. Veniam duis ullamco proident in do laboris ex adipisicing sint sit.</Typography> */}

            {/* <NothingSelectedView /> */}
            
            <NoteView />

            <IconButton
                size='large'
                sx={{   // No usamos el style para asignar estilo, porque este no tiene acceso global a las propiedades del theme
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50,
                }}
            >
                <AddOutlined sx={{ fontFamily: 30 }} />
            </IconButton>

        </JournalLayout>
    )
}
