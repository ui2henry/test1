/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MemberService } from "../member.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MemberCreateInput } from "./MemberCreateInput";
import { MemberWhereInput } from "./MemberWhereInput";
import { MemberWhereUniqueInput } from "./MemberWhereUniqueInput";
import { MemberFindManyArgs } from "./MemberFindManyArgs";
import { MemberUpdateInput } from "./MemberUpdateInput";
import { Member } from "./Member";
import { AddressFindManyArgs } from "../../address/base/AddressFindManyArgs";
import { Address } from "../../address/base/Address";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MemberControllerBase {
  constructor(
    protected readonly service: MemberService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Member })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: MemberCreateInput): Promise<Member> {
    return await this.service.create({
      data: data,
      select: {
        age: true,
        createdAt: true,
        email: true,
        id: true,
        memberId: true,
        name: true,
        sex: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Member] })
  @ApiNestedQuery(MemberFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Member[]> {
    const args = plainToClass(MemberFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        age: true,
        createdAt: true,
        email: true,
        id: true,
        memberId: true,
        name: true,
        sex: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Member })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Member | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        age: true,
        createdAt: true,
        email: true,
        id: true,
        memberId: true,
        name: true,
        sex: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Member })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() data: MemberUpdateInput
  ): Promise<Member | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          age: true,
          createdAt: true,
          email: true,
          id: true,
          memberId: true,
          name: true,
          sex: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Member })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Member | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          age: true,
          createdAt: true,
          email: true,
          id: true,
          memberId: true,
          name: true,
          sex: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/addresses")
  @ApiNestedQuery(AddressFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "read",
    possession: "any",
  })
  async findManyAddresses(
    @common.Req() request: Request,
    @common.Param() params: MemberWhereUniqueInput
  ): Promise<Address[]> {
    const query = plainToClass(AddressFindManyArgs, request.query);
    const results = await this.service.findAddresses(params.id, {
      ...query,
      select: {
        address1: true,
        address2: true,
        createdAt: true,
        id: true,

        memberId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/addresses")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async connectAddresses(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: AddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      addresses: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/addresses")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async updateAddresses(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: AddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      addresses: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/addresses")
  @nestAccessControl.UseRoles({
    resource: "Member",
    action: "update",
    possession: "any",
  })
  async disconnectAddresses(
    @common.Param() params: MemberWhereUniqueInput,
    @common.Body() body: AddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      addresses: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
