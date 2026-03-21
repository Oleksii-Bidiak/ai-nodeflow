import { baseApi as api } from "./baseApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    usersControllerCreate: build.mutation<
      UsersControllerCreateApiResponse,
      UsersControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/users`,
        method: "POST",
        body: queryArg.createUserDto,
      }),
    }),
    usersControllerFindAll: build.query<
      UsersControllerFindAllApiResponse,
      UsersControllerFindAllApiArg
    >({
      query: () => ({ url: `/users` }),
    }),
    usersControllerFindOne: build.query<
      UsersControllerFindOneApiResponse,
      UsersControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
    }),
    usersControllerUpdate: build.mutation<
      UsersControllerUpdateApiResponse,
      UsersControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateUserDto,
      }),
    }),
    usersControllerRemove: build.mutation<
      UsersControllerRemoveApiResponse,
      UsersControllerRemoveApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.id}`, method: "DELETE" }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedApi };
export type UsersControllerCreateApiResponse =
  /** status 201 User created */ UserEntity;
export type UsersControllerCreateApiArg = {
  createUserDto: CreateUserDto;
};
export type UsersControllerFindAllApiResponse =
  /** status 200 Users list */ UserEntity[];
export type UsersControllerFindAllApiArg = void;
export type UsersControllerFindOneApiResponse = unknown;
export type UsersControllerFindOneApiArg = {
  id: string;
};
export type UsersControllerUpdateApiResponse = unknown;
export type UsersControllerUpdateApiArg = {
  id: string;
  updateUserDto: UpdateUserDto;
};
export type UsersControllerRemoveApiResponse = unknown;
export type UsersControllerRemoveApiArg = {
  id: string;
};
export type UserEntity = {
  /** Unique identefier */
  id: string;
  email: string;
  name?: string | null;
  /** Creation time */
  createdAt: string;
  /** Last updated time */
  updatedAt: string;
};
export type CreateUserDto = {
  /** User's email */
  email: string;
  /** User's name (optional) */
  name?: string;
};
export type UpdateUserDto = {};
export const {
  useUsersControllerCreateMutation,
  useUsersControllerFindAllQuery,
  useUsersControllerFindOneQuery,
  useUsersControllerUpdateMutation,
  useUsersControllerRemoveMutation,
} = injectedRtkApi;
