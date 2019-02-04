using System.Linq;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() {
            CreateMap<User, UserForDetailsDto>()
                .ForMember(
                    dest => dest.photoUrl,
                    opt => {
                        opt.MapFrom(src => src.Photos
                            .FirstOrDefault(p => p.IsMain).Url);
                    }
                )
                .ForMember(
                    dest => dest.Age,
                    opt => {
                        opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                    }
                );

            CreateMap<User, UserForListDto>()
                .ForMember(
                    dest => dest.photoUrl,
                    opt => {
                        opt.MapFrom(src => src.Photos
                            .FirstOrDefault(p => p.IsMain).Url);
                    }
                )
                .ForMember(
                    dest => dest.Age,
                    opt => {
                        opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                    }
                );
                
            CreateMap<Photo, PhotoForDetaildDto>();
            CreateMap<UserForUpdateDto, User>();
        }
    }
}