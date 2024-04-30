import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase // sut = system under test

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Pertou gym',
      description: null,
      phone: null,
      latitude: -3.8391375,
      longitude: -49.1002109,
    })

    await gymsRepository.create({
      title: 'Logeu Gym',
      description: null,
      phone: null,
      latitude: -4.443732,
      longitude: -49.1156212,
    })

    const { gyms } = await sut.execute({
      userLatitude: -3.8391375,
      userLongitude: -49.1002109,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Pertou gym' })])
  })
})
