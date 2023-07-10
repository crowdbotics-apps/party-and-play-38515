import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_service_type_list = createAsyncThunk(
  "service_Types/api_v1_service_type_list",
  async payload => {
    const response = await apiService.api_v1_service_type_list(payload)
    return response.data
  }
)
export const api_v1_service_type_create = createAsyncThunk(
  "service_Types/api_v1_service_type_create",
  async payload => {
    const response = await apiService.api_v1_service_type_create(payload)
    return response.data
  }
)
export const api_v1_service_type_retrieve = createAsyncThunk(
  "service_Types/api_v1_service_type_retrieve",
  async payload => {
    const response = await apiService.api_v1_service_type_retrieve(payload)
    return response.data
  }
)
export const api_v1_service_type_update = createAsyncThunk(
  "service_Types/api_v1_service_type_update",
  async payload => {
    const response = await apiService.api_v1_service_type_update(payload)
    return response.data
  }
)
export const api_v1_service_type_partial_update = createAsyncThunk(
  "service_Types/api_v1_service_type_partial_update",
  async payload => {
    const response = await apiService.api_v1_service_type_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_service_type_destroy = createAsyncThunk(
  "service_Types/api_v1_service_type_destroy",
  async payload => {
    const response = await apiService.api_v1_service_type_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const service_TypesSlice = createSlice({
  name: "service_Types",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_service_type_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_service_type_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_service_type_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_service_type_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_service_type_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_service_type_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_service_type_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_service_type_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_service_type_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_service_type_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_service_type_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_service_type_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_service_type_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_service_type_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_service_type_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_service_type_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_service_type_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_service_type_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_service_type_list,
  api_v1_service_type_create,
  api_v1_service_type_retrieve,
  api_v1_service_type_update,
  api_v1_service_type_partial_update,
  api_v1_service_type_destroy,
  slice: service_TypesSlice
}
