import { Box } from '@mui/material';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';
import FormButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import FormSelect from '../../components/FormSelect/FormSelect';
import Page from '../../components/Page/Page';
import { NotesStatus } from '../../constants/constants';
import { useCreateNote, useNotes, useUpdateNote } from '../../hooks/note';
import { createNoteSchema, updateNoteSchema } from '../../schemas/schemas';
import { ICreateNotePayload, IUpdateNotePayload } from '../../types/services';

import './create-note.scss';

const CreateNote = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { notes, refetch } = useNotes();
  const { createNote, isCreatingNote } = useCreateNote();
  const { updateNote, isUpadingNote } = useUpdateNote();

  const handleSubmit = async (
    values: ICreateNotePayload | IUpdateNotePayload
  ) => {
    id
      ? await updateNote({ ...values, id: +id })
      : await createNote(values as ICreateNotePayload);

    refetch();
    navigate('/notes');
  };

  const note = notes?.find((note) => note.id.toString() === id);

  return (
    <Page className="create-note-wrapper">
      <Form
        initialValues={{
          title: id ? note?.title : '',
          description: id ? note?.description : '',
          status: id ? note?.status : undefined,
        }}
        className="create-note-form"
        onSubmit={handleSubmit}
        validationSchema={id ? updateNoteSchema : createNoteSchema}
      >
        <Box className="heading">{id ? 'Update' : 'Add'} a note</Box>
        <FormInput
          disabled={isCreatingNote || isUpadingNote}
          fieldName="title"
          label="Title"
          fullWidth
        />
        <FormInput
          disabled={isCreatingNote || isUpadingNote}
          fieldName="description"
          label="Description"
          fullWidth
        />
        {id && <FormSelect fieldName="status" />}
        <FormButton
          disabled={isCreatingNote || isUpadingNote}
          variant="contained"
        >
          {id ? 'Update' : 'Create'} Note
        </FormButton>
      </Form>
    </Page>
  );
};

export default CreateNote;
