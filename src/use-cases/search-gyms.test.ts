import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase // sut = system under test

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'JS gym',
      description: null,
      phone: null,
      latitude: -3.8391375,
      longitude: -49.1002109,
    })

    await gymsRepository.create({
      title: 'TS gym',
      description: null,
      phone: null,
      latitude: -3.8391375,
      longitude: -49.1002109,
    })

    const { gyms } = await sut.execute({
      query: 'JS',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'JS gym' })])
  })

  it('should be able to fetch paginate gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `TS gym ${i}`,
        description: null,
        phone: null,
        latitude: -3.8391375,
        longitude: -49.1002109,
      })
    }

    const { gyms } = await sut.execute({
      query: 'TS',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'TS gym 21' }),
      expect.objectContaining({ title: 'TS gym 22' }),
    ])
  })
})
