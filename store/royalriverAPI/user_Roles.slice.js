import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_user_role_list = createAsyncThunk(
  "user_Roles/api_v1_user_role_list",
  async payload => {
    const response = await apiService.api_v1_user_role_list(payload)
    return response.data
  }
)
export const api_v1_user_role_create = createAsyncThunk(
  "user_Roles/api_v1_user_role_create",
  async payload => {
    const response = await apiService.api_v1_user_role_create(payload)
    return response.data
  }
)
export const api_v1_user_role_retrieve = createAsyncThunk(
  "user_Roles/api_v1_user_role_retrieve",
  async payload => {
    const response = await apiService.api_v1_user_role_retrieve(payload)
    return response.data
  }
)
export const api_v1_user_role_update = createAsyncThunk(
  "user_Roles/api_v1_user_role_update",
  async payload => {
    const response = await apiService.api_v1_user_role_update(payload)
    return response.data
  }
)
export const api_v1_user_role_partial_update = createAsyncThunk(
  "user_Roles/api_v1_user_role_partial_update",
  async payload => {
    const response = await apiService.api_v1_user_role_partial_update(payload)
    return response.data
  }
)
export const api_v1_user_role_destroy = createAsyncThunk(
  "user_Roles/api_v1_user_role_destroy",
  async payload => {
    const response = await apiService.api_v1_user_role_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const user_RolesSlice = createSlice({
  name: "user_Roles",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_user_role_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_user_role_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_user_role_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_user_role_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_user_role_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_user_role_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_user_role_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_user_role_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_user_role_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_user_role_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_user_role_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_user_role_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_user_role_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_user_role_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_user_role_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_user_role_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_user_role_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_user_role_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_user_role_list,
  api_v1_user_role_create,
  api_v1_user_role_retrieve,
  api_v1_user_role_update,
  api_v1_user_role_partial_update,
  api_v1_user_role_destroy,
  slice: user_RolesSlice
}
