import { NotesStatus } from '../constants/constants';
import { IMessageResponse } from './common';

export interface ILoginPaylaod {
    email: string;
    password: string;
}

export type TLoginService = (payload: ILoginPaylaod) => Promise<string>;

export interface ISignupPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export type TSignupService = (payload: ISignupPayload) => Promise<string>;

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createAt: Date;
    updatedAt: Date;
}

export type TGetUserService = () => Promise<IUser>;

export interface IUpdateUserPayload {
    firstName?: string;
    lastName?: string;
}

export type TUpdateUserService = (payload: IUpdateUserPayload) => Promise<IMessageResponse>;

export interface INote {
    id: number;
    title: string;
    description: string;
    updatedAt: string;
    createAt: string;
    user: IUser;
    status: NotesStatus;
}

export interface IGetNotePayload {
    title?: string; 
    createdAfter?: string; 
    createdBefore?: string; 
    updatedAfter?: string;
    updatedBefore?: string; 
    status?: string;
}

export type TGetNotesService = (payload: IGetNotePayload) => Promise<INote[]>;

export type TDeleteNoteService = (id: number) => Promise<IMessageResponse>;

export interface ICreateNotePayload {
    title: string;
    description: string;
}

export type TCreateNoteService = (payload: ICreateNotePayload) => Promise<INote>;

export interface IUpdateNotePayload {
    title?: string;
    description?: string;
    status?: NotesStatus;
    id: number;
}

export type TUpdateNoteService = (payload: IUpdateNotePayload) => Promise<IMessageResponse>;