import { JobsResponse, StatsResponse, HeroResponse, HomePageResponse } from '@/types/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const api = {
  async getHomeData(locale: string = 'vi'): Promise<HomePageResponse> {
    const response = await fetch(`${API_BASE_URL}/wp-json/api/v1/homepage`, {
      headers: {
        'Accept-Language': locale,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch homepage data');
    }

    return response.json();
  },

  async getJobs(): Promise<JobsResponse> {
    const response = await fetch(`${API_BASE_URL}/jobs`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }

    return response.json();
  },

  async getJobById(id: string | number, locale: string) {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
      cache: 'no-store',
      headers: {
        'Accept-Language': locale,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch job');
    }

    return response.json();
  },

  async getStats(): Promise<StatsResponse> {
    const response = await fetch(`${API_BASE_URL}/stats`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }

    return response.json();
  },

  async getHeroSlides(): Promise<HeroResponse> {
    const response = await fetch(`${API_BASE_URL}/hero`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch hero slides');
    }

    return response.json();
  },
};
