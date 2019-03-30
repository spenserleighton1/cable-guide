import { apiFetch } from './api'

export const getGenres = () => {
  return apiFetch('genres?')
  .then(response => response.json())
}

// Netflix, Hbogo, Hulu, amazon, shotime, starz 

export const getChannels = () => {
  return apiFetch('channels', '&type=online')
  .then(response => response.json())
}
export const getChannelByID = (id) => {
  return apiFetch(`channels/${id}`)
  .then(response => response.json())
}
export const getMovies = () => {
  return apiFetch(`movies`)
  .then(response => response.json())
}
export const getMovieByID = (id) => {
  return apiFetch(`movies/${id}`)
  .then(response => response.json())
}
export const getMovieImagesByID = (id) => {
  return apiFetch(`movies/${id}/images`)
  .then(response => response.json())
}
export const getMoviesByService = (service) => {
  return apiFetch(`movies?sources=${service}`)
  .then(response => response.json())
}

