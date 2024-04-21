import { CheckIn } from '@prisma/client'
import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface CheckInUseCaseCaseReq {
  userId: string
  gymId: string
}

interface CheckInUseCaseCaseRes {
  checkIn: CheckIn
}

export class CheckInUseCaseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    gymId,
  }: CheckInUseCaseCaseReq): Promise<CheckInUseCaseCaseRes> {
    const checkIn = await this.checkInsRepository.create({
      gym_id: gymId,
      user_id: userId,
    })

    return {
      checkIn,
    }
  }
}
