import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/journal';

export const JournalPage = () => {

    const dispatch = useDispatch();
    const { isSaving, active } = useSelector( status => status.journal );

    const onClickNewNote = () => {
        dispatch( startNewNote() );
    }

    return (
        <JournalLayout>

            {
                (!!active)
                    ? <NoteView />
                    : <NothingSelectedView />
            }

            <IconButton
                onClick={ onClickNewNote }
                size='large'
                disabled={ isSaving }
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
