import { api } from "../api/api";

const puppyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPuppies: builder.query({
      query: () => ({
        url: "/players",
        method: "GET",
      }),
      providesTags: ["Puppy"],
      transformResponse: (response) => response.data.players,
    }),
    getPlayer: builder.query({
      query: (id) => ({
        url: `/players/${id}`,
        method: "GET",
      }),
      providesTags: ["Puppy"],
      transformResponse: (response) => response.data.player,
    }),
    deletePuppy: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Puppy"],
    }),
    addPuppy: builder.mutation({
      query: ({ ...player }) => ({
        url: "/players",
        method: "POST",
        body: player,
      }),
      invalidatesTags: ["Puppy"],
    }),
  }),
});




export const { useGetAllPuppiesQuery, useAddPuppyMutation, useGetPlayerQuery, useDeletePuppyMutation } = puppyApi;
