import { expect, describe, it } from 'vitest'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { AuthenticateUseCase } from './authenticate'
import { hash } from 'bcryptjs'
import { InvalidCredentialsError } from './erros/invalid-credentials-error'

describe('Authenticate Use Case', () => {
  it('should be able to authenticate', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateUseCase(usersRepository) // sut = system under test

    await usersRepository.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      email: 'john@doe.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should note be able to authenticate with wrong email', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateUseCase(usersRepository) // sut = system under test

    expect(() =>
      sut.execute({
        email: 'john@doe.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should note be able to authenticate with wrong password', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const sut = new AuthenticateUseCase(usersRepository) // sut = system under test

    await usersRepository.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password_hash: await hash('123456', 6),
    })

    expect(() =>
      sut.execute({
        email: 'john@doe.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
