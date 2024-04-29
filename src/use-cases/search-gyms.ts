import { GymsRepository } from '@/repositories/gyms-repository'
import { Gym } from '@prisma/client'

interface SearchGymsUseCaseReq {
  query: string
  page: number
}

interface SearchGymsUseCaseRes {
  gyms: Gym[]
}

export class SearchGymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    query,
    page,
  }: SearchGymsUseCaseReq): Promise<SearchGymsUseCaseRes> {
    const gyms = await this.gymsRepository.searchMany(query, page)

    return { gyms }
  }
}
